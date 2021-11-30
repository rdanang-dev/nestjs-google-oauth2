import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * App Controller
 * Used to handle all response and request related to App Module.
 * @author rdanang.
 */
@Controller('login')
export class AuthController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    if (!req.user) throw new Error('Something went wrong!');
    return { message: 'User information from google', user: req.user };
  }
}
