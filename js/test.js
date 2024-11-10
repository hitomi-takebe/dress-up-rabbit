// $ ←これがjQueryになります！🤗
// ボタンを押すとAさんとBさんのジャンケンが作られる

console.log("ジャンケン作る");

$("#change").on("click", function () {

    //     {
    //         $('#face_p').setTimeout(hidden, 2000);
    //     }

    // 表情を決める
    console.log("表情");

    var num = Math.floor(Math.random() * 4);
    console.log(num, "numにて箱の中身を指定");

    if (num === 0) {
        var a_num = "ニコニコしてる";//値を代入
        $('#face_p').html(a_num);
        $('#face_randomShow').attr('src', "img/rabbit_face_cute.PNG");
    } else if (num === 1) {
        var a_num = "ビックリしてる";//値を代入
        $('#face_p').html(a_num);
        $('#face_randomShow').attr('src', "img/rabbit_face_surprise.PNG");
    } else if (num === 2) {
        var a_num = "悲しんでいる";//値を代入
        $('#face_p').html(a_num);
        $('#face_randomShow').attr('src', "img/rabbit_face_sad.PNG");
    } else if (num === 3) {
        var a_num = "怒っている";//値を代入
        $('#face_p').html(a_num);
        $('#face_randomShow').attr('src', "img/rabbit_face_angry.PNG");
    }
    // 洋服を決める
    console.log("洋服");

    var num = Math.floor(Math.random() * 4);
    console.log(num, "numにて箱の中身を指定");

    if (num === 0) {
        var b_num = "サラリーマン";//値を代入
        $('#clothes_p').html(b_num);
        $('#clothes_randomShow').attr('src', "img/rabbit_suit.PNG");
    } else if (num === 1) {
        var b_num = "お兄さん";//値を代入
        $('#clothes_p').html(b_num);
        $('#clothes_randomShow').attr('src', "img/rabbit_tshirs.PNG");
    } else if (num === 2) {
        var b_num = "コックさん";//値を代入
        $('#clothes_p').html(b_num);
        $('#clothes_randomShow').attr('src', "img/rabbit_cock.PNG");
    } else if (num === 3) {
        var b_num = "ヤンキー";//値を代入
        $('#clothes_p').html(b_num);
        $('#clothes_randomShow').attr('src', "img/rabbit_y.PNG");
    }


    if (a_num === "怒っている" && b_num === "ヤンキー" || a_num === "怒っている" && b_num === "サラリーマン" || a_num === "怒っている" && b_num === "コックさん") {
        console.log("ストレス溜め込みすぎないようにね。");
        $('#imp2').html("＼ストレス溜め込みすぎないようにね。／");
        $("#imp2").css("color", "#878719");
        $("#imp2").css("font-size", "1.2em");
    } else if (a_num === "悲しんでいる") {
        console.log("どう思うよ？");
        $('#imp2').html("＼元気出してね。／");
        $("#imp2").css("color", "#878719");
        $("#imp2").css("font-size", "1.2em");
    } else if (a_num === "怒っている" && b_num === "お兄さん") {
        console.log("どう思う？");
        $('#imp2').html("／マイルドヤンキーだぞ！＼");
        $("#imp2").css("color", "red");
        $("#imp2").css("font-size", "2em");
        // 「お着替えしよう」ボタンを無効化
        $("#change").prop("disabled", true);
        // ポップアップで3秒後に表示
        setTimeout(function () {
            $('.popup').addClass('show').fadeIn();
        }, 3000);
        // 「お着替えしよう」ボタンを1秒後に有効化
        setTimeout(function () {
            $("#change").prop("disabled",false);
        }, 3000);
        // この下は消さない🤗
    } else {
        console.log("何もしない");
        $('#imp2').html("");
    }
});

$("#reset").on("click", function () {
    console.log("最初の状態に戻す");
    $('#face_randomShow').attr('src', "img/rabbit_face.PNG");
    $('#clothes_randomShow').attr('src', "img/rabbit.PNG");
    $('#face_p').html("どんな");
    $('#clothes_p').html("うさぎさん？");
    $('#imp2').html("");
});

//ポップアップを出す
$('#close').on('click', function () {
    console.log("マイルドヤンキー出没時のポップアップ");
    $('.popup').fadeOut();
    // $('#reset').on('click');
});
//  } else if (a_san === "グー" && b_san === "グー" || a_san === "チョキ" && b_san === "チョキ" || a_san === "パー" && b_san === "パー") {
//     console.log("あいこ");
//     $('#hantei').html("あいこだよ。もう一度遊んでね。");


// $(document).ready(function () {
//     $("#screenshot-btn").click(function () {
//         html2canvas(document.getElementById("target-table")).then(function (canvas) {
//             var imgData = canvas.toDataURL("image/png");
//             var link = document.createElement(\'a\');
// 					link.href = imgData;
//             link.download = \'table-screenshot.png\';
//             link.click();
//         });
//     });
// });

