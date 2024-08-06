const crypto = require("node:crypto");
const URLSafeBase64 = require("urlsafe-base64");

async function generateChallengeLink() {
    let auth_code_verifier = URLSafeBase64.encode(await crypto.randomBytes(32));
    let hashed_auth_code_verifier = URLSafeBase64.encode(await crypto.createHash('sha256').update(auth_code_verifier).digest());
    return {
        auth_code_verifier: auth_code_verifier,
        auth_code_challenge: hashed_auth_code_verifier
    }
}

module.exports.generateChallengeLink = generateChallengeLink;