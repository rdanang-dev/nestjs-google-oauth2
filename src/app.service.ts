import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'something went wrong!';
    }

    /**
     * Returning Logined User Data.
     */
    return {
      message: 'Login Berhasil!',
      email: req.user.email,
      namaDepan: req.user.firstName,
      namaBelakang: req.user.lastName,
      foto: req.user.picture,
      token: req.user.accessToken,
    };
  }
}
