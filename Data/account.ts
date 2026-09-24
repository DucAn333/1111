
// cac file data co the duoc doi thanh env


function generateRandomName(): string {
    const nums = '0123456789';
    const randomNums = Array.from({ length: 2 }, () => nums[Math.floor(Math.random() * nums.length)]).join('');
    
    return randomNums;
}
const randomNum = generateRandomName()

export const LinkURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

export const Account = [
  {
  username: 'Admin',
  password: 'admin123',
  },
  {
  username: 'Admin',
  password: 'admin123456',
  },
];
