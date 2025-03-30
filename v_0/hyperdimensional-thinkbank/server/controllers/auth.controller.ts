import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { username, email, password, userType } = req.body;
      const result = await AuthService.register(username, email, password, userType);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AuthController();
