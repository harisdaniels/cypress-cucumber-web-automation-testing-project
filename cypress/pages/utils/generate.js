class Generate {
    generateEmail() {
        let randomText = "";
        let testEmail = "";
        let pattern = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < 10; i ++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
            testEmail = randomText + "@gmail.com";
        }

        return testEmail;
    }

    generateString() {
        let randomText = "";
        let testEmail = "";
        let pattern = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < 10; i ++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
            testEmail = randomText;
        }

        return testEmail;
    }
}

export default Generate;