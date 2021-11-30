import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Route to get the user profile / login
   */
  @Get('/')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  /**
   * Route to handle the callback from Google.
   */
  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
}
