import crypto from 'crypto';

const secret_key = 'p!ll!t'

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt,password].join('/')).update(secret_key).digest('hex');
}