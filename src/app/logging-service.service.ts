export class LoggingService {

  logAccountCreated(message: string) {
    console.log(message);
  }

  logStatusChanged(status: string) {
    console.log(`Status has been chnaged to - ${status}`);
  }
}
