 // 1
    var numA = 100;
    var numB = 150;
    if(numA == 100 && numB == 150){
      console.log("ANDの条件と一致した時の処理");
      console.log(numA == 100 && numB == 150);
    }else{
      console.log("ANDの条件と一致しなかった処理");
      console.log(numA == 100 && numB == 150);
    }

    // 2
    var numA = 60;
    var numB = 70;
    if (numA == 50 || numB == 70) {
    console.log("ANDの条件と一致した処理");
    console.log(numA == 60 || numB == 70);
    } else {
    console.log("ANDの条件と一致しなかった処理");
    console.log(numA == 40 || numB == 40);
    };

    // 3
    var num = null;
    if (!num) {
    console.log("NOTの条件と一致した処理");
    console.log(num);
    } else {
    console.log("NOTの条件と一致しなかった処理");
    console.log(num);
    };
