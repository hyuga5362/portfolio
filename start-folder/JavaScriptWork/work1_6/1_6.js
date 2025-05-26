console.log("👦お客さんがコーヒーとサンドイッチを注文しました");


function makeCoffee() {

    return new Promise((resolve) => {
        console.log("☕ スタッフ：先にコーヒーを準備します...")

      setTimeout(() => {

        console.log("✅ コーヒーができました！");

        resolve("コーヒー");

      }, 2000); // 2秒

    });

  }



  function makeSandwich() {

    
    return new Promise((resolve) => {
        console.log("🥪 スタッフ：次にサンドイッチを準備します..");

      setTimeout(() => {

        console.log("✅ サンドイッチができました！");

        resolve("サンドイッチ");

      }, 3000); // 3秒

    });

  }



  async function serveCustomer() {

    await Promise.all([makeCoffee(),makeSandwich()]);

    console.log("🍽️ スタッフ：すべてできたので配膳します！");

  }


  serveCustomer();