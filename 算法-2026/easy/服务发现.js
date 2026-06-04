// ==============================================
// 【核心】K8s Service：固定名字 + 固定ClusterIP
// ==============================================
const Service = {
    name: "order-service",      // 永远不变！
    clusterIP: "10.96.0.100",   // 永远不变！ ClusterIP 不是真实机器的 IP，它是一个 “虚拟门牌号”。
    endpoints: [],              // 底下真实Pod IP（会自动变）
  
    // 自动维护后端可用Pod（K8s自动做）
    updateEndpoints(pods) {
      this.endpoints = pods.filter(p => p.ready);
    },
  
    // 服务发现入口：调用方只访问Service，不直接访问Pod
    getTarget() {
      if (this.endpoints.length === 0) return null;
      // 负载均衡：随便选一个健康Pod
      return this.endpoints[Math.floor(Math.random() * this.endpoints.length)];
    }
  };
  
  // ==============================================
  // Pod：IP会变、会扩缩容、会重建（生产真实情况）
  // ==============================================
  function createPod(ip) {
    const pod = {
      ip: ip,        // 每次重建/扩容都会变！
      ready: false
    };
    // 模拟启动耗时
    setTimeout(() => {
      pod.ready = true;
      console.log(`[Pod ${ip}] 启动完成 → 已就绪`);
      Service.updateEndpoints(allPods); // 让Service自动刷新IP列表
    }, 2000);
    return pod;
  }
  
  // ==============================================
  // 调用方：只认 Service！完全不管 Pod IP！
  // ==============================================
  async function caller() {
    const targetPod = Service.getTarget();
  
    if (!targetPod) {
      console.log("[调用方] 暂无就绪Pod，重试中...");
      setTimeout(caller, 1000);
      return;
    }
  
    // ✨ 关键点：调用方打印的永远是 Service 固定信息
    // Pod IP 变了、扩缩容了，调用方代码完全不变！
    console.log(`
    ✅ 调用成功！
    我访问的是：Service = ${Service.name} (${Service.clusterIP})
    实际路由到：Pod IP = ${targetPod.ip}（自动变，我不管）
    `);
  }
  
  // ==============================================
  // 模拟生产场景：扩缩容、IP变化
  // ==============================================
  let allPods = [];
  
  console.log("=== 启动第一个 Pod（IP: 192.168.1.10）===");
  allPods.push(createPod("192.168.1.10"));
  
  setTimeout(async () => {
    console.log("\n=== 扩容！新增第二个 Pod（IP: 192.168.1.11）===");
    allPods.push(createPod("192.168.1.11"));
  }, 5000);
  
  setTimeout(async () => {
    console.log("\n=== 缩容/故障！删掉第一个 Pod ===");
    allPods = allPods.filter(p => p.ip !== "192.168.1.10");
    Service.updateEndpoints(allPods);
  }, 10000);
  
  // 启动调用方（全程不关心IP）
  caller();