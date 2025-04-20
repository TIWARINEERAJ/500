import { User } from "../../models/user.model"; // Adjust path if needed

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
