

function encrypt_key() {
  var message = 'I am the Key'
  var publicKey = mCrypto.createPublicKey(fs.readFileSync(__dirname + '/iamthe.crt'));
  var binaryData = Buffer.from(JSON.stringify(message));
  var encrypted = mCrypto.publicEncrypt({ key: publicKey, padding: mCrypto.constants.RSA_PKCS1_PADDING}, binaryData).toString('base64');
  console.log(encrypted)

}

function decrypt_key() {
  var mysecret = 'efm8in+v/DFcXwsfWT2lymiJV1Avm8PTxaAlWCrLdNsE14Bu6rtR/wShThz6tgxfvzho3J+F4GV0RAdd4ePyQ2BYYgRGheCwHAQGCyv+ALIA8A4oly9WnTDQ0cpei1dreTmFIrvCFhyFNPZOrXr7WDYxjmM7q/sIAu3VT4VAPaxeYjwh4pakug6AgKL0N/drk/FLEpOC5KxCuepXlfdbOG6CZxOKvWkxJLzmNW5EDq/jB+C+yn+g+XVS1xqQxHZKbWWtXeVk5mHzaHjtpvNFpkSVShSTcK6UECo3UhRY66TydYKfWLQTEti9dUbRIF5NulfBcHhmnRviH+toWuFhAA3tDmgm8NOSGDgCi2EsRYsIzRQRpnt35gi6fm7jkQyo0bHJ//NC3l3WYmWbqAFuodK++0IM/fWe0Bv08mckjSvNb1nXoVPdKyvTFkDc5k0i2VmAYEyNCSgEcBN2wXwpkKz4GmgndieAXYy/6gszR57h1Ld8vLBZgcqzdej/HLjQNXa7IqMruh6HiJa3FUW2T4rE071+Ai7hooyZ2UgEF3PpWAo19bfozMvIVKl/Jr7KySzGlwz8VigvuAyWUNLG5xqAFdUbezu3ufJeQtQ8BT/4RvY2Thrr9gAYFBx4tqaC3/51YEI1GtW1W9IX7O3D7wLEDAtXCjm4TZ2SoPyo8U4=';

  var privateKey = mCrypto.createPrivateKey(fs.readFileSync(__dirname + '/iamthe.key'));
  var binaryData = Buffer.from(mysecret, "base64");
  var decrypted = mCrypto.privateDecrypt({ key: privateKey, padding: mCrypto.constants.RSA_PKCS1_PADDING}, binaryData).toString();
  console.log(decrypted)
}

encrypt_key();

decrypt_key();
