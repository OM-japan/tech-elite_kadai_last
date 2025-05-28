<?php include ( dirname(__FILE__) . '/header.php' ); ?>

<main>
    <div class="index2-4">
        <h2>お問い合わせ内容確認</h1>
    </div>

    <form action="thanks.php" method="POST">
        <div class="confirm_row">
            <p class="confirm_label">お名前</p>
            <p class="confirm_value" name="name" readonly><?php echo $_POST["name"] ?></p>
            <textarea name="name"><?php echo $_POST["name"] ?></textarea>
        </div>
        <div class="confirm_row">
            <p class="confirm_label">席の場所</p>
            <p class="confirm_value" name="seat" readonly><?php echo $_POST["seat"] ?></p>
            <textarea name="seat"><?php echo $_POST["seat"] ?></textarea>
        </div>
        <div class="confirm_row">
            <p class="confirm_label">メールアドレス</p>
            <p class="confirm_value" name="email" readonly><?php echo $_POST["email"] ?></p>
            <textarea name="email"><?php echo $_POST["email"] ?></textarea>
        </div>
        <div class="confirm_row">
            <p class="confirm_label">電話番号</p>
            <p class="confirm_value" name="tel" readonly><?php echo $_POST["tel"] ?></p>
            <textarea name="tel"><?php echo $_POST["tel"] ?></textarea>
        </div>
        <div class="confirm_row">
            <a id="back" href="index.php#index4">戻る</a><button id="submit">送信</button>
        </div>
    </form>
</main>

<?php include ( dirname(__FILE__) . '/footer.php'); ?>  