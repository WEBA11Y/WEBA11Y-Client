import { ERROR_MESSAGES } from "../../../constants/error";

export class RoleError extends Error {
  constructor(message = ERROR_MESSAGES.ROLE_GUEST) {
    super(message);
    this.name = "RoleError";
  }
}
