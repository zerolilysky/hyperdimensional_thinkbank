import User, { IUser } from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('用户不存在');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('密码错误');
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return { user, token };
  }

  async register(username: string, email: string, password: string, userType: string) {
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashed, userType });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return { user: newUser, token };
  }
}

export default new AuthService();
