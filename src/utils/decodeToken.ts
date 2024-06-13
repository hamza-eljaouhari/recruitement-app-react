import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  id: string;
  type: 'candidate' | 'recruiter';
  exp: number;
}

export const decodeToken = (token: string): DecodedToken => {
  return jwtDecode<DecodedToken>(token);
};
