import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../services/auth.service";

@ApiTags('Usuario')
@Controller('/auth')
@ApiBearerAuth()
export class AuthController{
    constructor(private authService: AuthService){}
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login (@Body() user: UsuarioLogin): Promise<any>{
        return await this.authService.login(user)
    }
}
