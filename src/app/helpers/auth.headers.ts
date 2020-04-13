import { environment } from "../../environments/environment";


export const authHeader: string = 'token ' + environment.oauth_token;
