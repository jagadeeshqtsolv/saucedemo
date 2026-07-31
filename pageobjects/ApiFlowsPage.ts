import type { Page, APIRequestContext } from "@playwright/test";
import { Login } from "../api/Login";
import { UserDetails } from "../api/UserDetails";

export class ApiFlowsPage {
  constructor(private readonly page: Page) {}

  async apiflow(request: APIRequestContext, vars: Record<string, string>): Promise<void> {
    const login = new Login();
    Object.assign(vars, await login.login(request, vars));
    const userDetails = new UserDetails();
    Object.assign(vars, await userDetails.getUserDetails(request, vars));
    Object.assign(vars, await userDetails.getUserById(request, vars));
    Object.assign(vars, await userDetails.getUserByName(request, vars));
  }

}
