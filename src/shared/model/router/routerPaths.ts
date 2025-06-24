export enum AppRoutes {
  HOME = 'home',
  LOGIN = 'login',
  SIGN_UP = 'signUp',
  VERIFICATION = 'verification',
  REGISTRATION = 'registration',
  RECOVERY_PASSWORD = 'recoveryPassword',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.SIGN_UP]: "/signup",
  [AppRoutes.VERIFICATION]: "/verify",
  [AppRoutes.REGISTRATION]: "/registration",
  [AppRoutes.RECOVERY_PASSWORD]: "/recoveryPassword",
};
