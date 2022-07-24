const wasrealiscool = require('readline');

function wasreal(wasreal3) {
    var wasreal2 = wasreal3 + '';
    let wasreal4 = wasreal2.split('');
    let wasreal5 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    for (let i = 0; i < wasreal4.length - 1; i++) {
        wasreal4[i] = wasreal4[i] * wasreal5[i];
    }
    let wasreal6 = wasreal4[wasreal4.length - 1];
    let wasreal7 = 0;
    for (let i = 0; i < wasreal4.length - 1; i++) {
        wasreal7 += wasreal4[i];
    }
    wasreal7 = wasreal7 % 11;
    wasreal7 = 11 - wasreal7;
    if (wasreal7 > 9) {
        wasreal7 = wasreal7 % 10;
    }
    if (wasreal7 == wasreal6) {
        return { result: true, birthday: `${wasreal2.substring(0,2)}-${wasreal2.substring(2,4)}-${wasreal2.substring(4,6)}`, sex: wasreal4[6] % 2 == 0 ? '남자' : '여자' };
    }
    if (wasreal7 != wasreal6 && wasreal6 != undefined) {
        return { result: false };
    }
}
async function wasrealgod(content) {
    return new Promise((resolve, reject) => {
        const rl = wasrealiscool.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(content, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}
async function wasrealisonlyone() {
    console.clear();
    while (true) {
        let wasrealgood = await wasrealgod('주민등록번호를 입력하세요: ');
        let wasrealcool = wasreal(wasrealgood);
        if (wasrealcool.result) {
            console.log(`유효한 주민등록번호입니다.\n정보\n생년월일: ${wasrealcool.birthday}\n성별: ${wasrealcool.sex}`);
        } else {
            console.log('유효하지 않은 주민등록번호입니다.');
        }
        await wasrealgod('\n다시 입력하시려면 엔터를 입력하세요');
        console.clear();
    }
}
wasrealisonlyone();