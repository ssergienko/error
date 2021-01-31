
const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}

var secret
var text
// To create a cipher
const myCipher = cipher('I am the key')

//Then cipher any text:
secret = myCipher('I am the key')   // --> "7c606d287b6d6b7a6d7c287b7c7a61666f"

console.log(secret)
//To decipher, you need to create a decipher and use it:
const myDecipher = decipher('I am the key')
text = myDecipher(secret)
console.log(text)

const mCrypto = require('crypto');
// const fs = require('fs');


// Second variant

var iamthekey_public = `-----BEGIN CERTIFICATE-----
MIIFeTCCA2GgAwIBAgIUYjLBexHeZ8yt/VLCawBb0dT7aiIwDQYJKoZIhvcNAQEL
BQAwTDELMAkGA1UEBhMCUlUxDDAKBgNVBAgMA1NwYjEMMAoGA1UEBwwDU1BiMSEw
HwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwHhcNMjEwMTMxMTQzNzQ4
WhcNMjIwMTMxMTQzNzQ4WjBMMQswCQYDVQQGEwJSVTEMMAoGA1UECAwDU3BiMQww
CgYDVQQHDANTUGIxITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDCC
AiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAMs3HDqVZuuj+wvknRZYWSCO
GWF4qSSiEMyVQaFglDJkZlZ44aV/xTDj7RXnMw9cNL669N82Zx0rLzBKoRVkXDpN
4WqBrC+WMU52rjC/Mnb9J0scOC3JLkm+rJ2g3DOqUipI3VhcyAIZ/KNhVpp671nf
TY1HPx8NEAt8w5WXsqsW8EklgJsVTuB4gGv0a1wPEHuqhVKYKLFc5jmJbxD9wd0b
l9aFfNKgU7+T2beTq050mCPjfY+Oa2hlUs+BZeAQ7WhZLxpq8MZ7CLOJBK0++lsN
I1Ll749/VHKNhUyTKz6SQNnzmJ+WCRE+ncYhtpz8KxIn1TtN/KSUuzxgKgfXtVQO
6Xw8/Gc6UaNO+4FiEoyzfqhj8oUDkt5a4E9s8gtnudhdBq+U8zVckN6eJLbe9hXU
K5PyGY8Q92Xky4+FNj80n5eV2YZb1EIY7YLxpV/dyCsALcBCbpJU5/MX0rVSdO4k
uL3/ClzBr0GQ/Byz6w9rM+QEq9s4Vmhrleficcn6x/SdehQ45Rhh6FTZLGvPrjMv
SvGukgWIkQaF/wVOn5zzftrJ86jGCqY5Qz6TuPFjKHgJhsUQ7wZ7z36vkqvRVK6s
lkcIi8aSHoOSi3oWKJoMHxEgVUdH5VABkf7mtXi96K6+M9kYXmsf4A7MGtpZPiRQ
c01ndeSt3OVL+4zCxvVbAgMBAAGjUzBRMB0GA1UdDgQWBBSqZaznKpgURj7Wx4jU
ImC96ZUu4jAfBgNVHSMEGDAWgBSqZaznKpgURj7Wx4jUImC96ZUu4jAPBgNVHRMB
Af8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4ICAQA9OAqGVrELA4QX+iwcrRDtP+1x
XaRAoI0s2R+1Fx4wPLJ4neMFQD5U+Xmuj4yYzlwM6HBLuflBt63VNbF5yb4wt5ud
/qVWH2pv0WDB14Zpbus5O9A3wmHySvBa0LeUzYC/4/8Eh+lsO1Wu0mVGkWIA+5OA
MTN3iv61Xnl+kX0TeXXhWCAY9VGGG9Rtrm0gfHXIz1v7Dj+bL+Jtxxr2y0nI6+NJ
cjkmHsxdsTf88emGkggQyYtVwi6vQ41DuccEwwlXgDVRnsOOlfRw0+d0jw0psHMq
fdHoaoaI9jW6eJvd+EEe10ddlPy9IgPU7rZnmSgDpLlxd9H0Rr1DSqG5gyeNi8D/
gOcvitSnZmpkNvG7TYsUOYNHmhkzipcmuNBtRBp64lIY/eTfWsIdS9T6g/mLrXNg
dNQQYW6AeASL8RbF7bS/ALHteOzyJP7JOD6g5HTpYmg3rLIkJ0tPY6klfa5IDm87
jrsukmNaxuwxgNGDbnaS1CyiTxG74cbx0hYlaC2HilH1x8Qok05z/tIhv5bfdlM0
6BABqfRsOnMIUlhueY1pdYs4EEZehookUhddUXk5xBANJlwY5aLpeCfphOybtpY+
IV/COPySx0ARnBqmKNQrLuY/GvT/0JFY3KReipy0d1UULVXJILVve1unjrF5w77o
zvNc40Ij6sTOK8mzOw==
-----END CERTIFICATE-----`;

var iamthekey_private = `-----BEGIN PRIVATE KEY-----
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
tNQ2dXvJmXjRoulwPgP2Ye3pE1C0A+I=
-----END PRIVATE KEY-----`;

function encrypt_key() {
  var message = 'I am the Key'
  // var publicKey = mCrypto.createPublicKey(fs.readFileSync(__dirname + '/IamTheKey.crt'));
  var publicKey = mCrypto.createPublicKey(iamthekey_public);
  var binaryData = Buffer.from(JSON.stringify(message));
  var encrypted = mCrypto.publicEncrypt({ key: publicKey, padding: mCrypto.constants.RSA_PKCS1_PADDING}, binaryData).toString('base64');
  console.log(encrypted)

}

function decrypt_key() {
  var mysecret = 'efm8in+v/DFcXwsfWT2lymiJV1Avm8PTxaAlWCrLdNsE14Bu6rtR/wShThz6tgxfvzho3J+F4GV0RAdd4ePyQ2BYYgRGheCwHAQGCyv+ALIA8A4oly9WnTDQ0cpei1dreTmFIrvCFhyFNPZOrXr7WDYxjmM7q/sIAu3VT4VAPaxeYjwh4pakug6AgKL0N/drk/FLEpOC5KxCuepXlfdbOG6CZxOKvWkxJLzmNW5EDq/jB+C+yn+g+XVS1xqQxHZKbWWtXeVk5mHzaHjtpvNFpkSVShSTcK6UECo3UhRY66TydYKfWLQTEti9dUbRIF5NulfBcHhmnRviH+toWuFhAA3tDmgm8NOSGDgCi2EsRYsIzRQRpnt35gi6fm7jkQyo0bHJ//NC3l3WYmWbqAFuodK++0IM/fWe0Bv08mckjSvNb1nXoVPdKyvTFkDc5k0i2VmAYEyNCSgEcBN2wXwpkKz4GmgndieAXYy/6gszR57h1Ld8vLBZgcqzdej/HLjQNXa7IqMruh6HiJa3FUW2T4rE071+Ai7hooyZ2UgEF3PpWAo19bfozMvIVKl/Jr7KySzGlwz8VigvuAyWUNLG5xqAFdUbezu3ufJeQtQ8BT/4RvY2Thrr9gAYFBx4tqaC3/51YEI1GtW1W9IX7O3D7wLEDAtXCjm4TZ2SoPyo8U4=';

  var privateKey = mCrypto.createPrivateKey(iamthekey_private);
  var binaryData = Buffer.from(mysecret, "base64");
  var decrypted = mCrypto.privateDecrypt({ key: privateKey, padding: mCrypto.constants.RSA_PKCS1_PADDING}, binaryData).toString();
  console.log(decrypted)
}

encrypt_key();

// I think we can only decrypt
decrypt_key();
