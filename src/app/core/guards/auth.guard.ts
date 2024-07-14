import { inject } from "@angular/core";
import { UserService } from "../../autenticacao/services/user.service";
import { Router } from "@angular/router";

export const authGuard = () => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.estaLoagado()) {
        return true;
    } else {
        router.navigate(['auth/login']);
        return false;
    }
};