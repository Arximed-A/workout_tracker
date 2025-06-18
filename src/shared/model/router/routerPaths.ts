export enum AppRoutes {
  HOME = 'home',
  LOGIN = 'login',
  SIGN_UP = 'signUp',
  VERIFICATION = 'verification',
  REGISTRATION = 'registration',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.SIGN_UP]: "/signup",
  [AppRoutes.VERIFICATION]: "/verify",
  [AppRoutes.REGISTRATION]: "/registration",
};
