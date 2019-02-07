export class LoggingService {
   private static options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
   };
   private static locale: string = 'en-US';

   private getDate() {
      return (new Date()).toLocaleDateString(LoggingService.locale, LoggingService.options);
   }

   public info(msg: string) {
      console.log(`%cINFO:%c [${this.getDate()}]: ${msg}`, "color: blue", "color: inherit");
   }
   public warn(msg: string) {
      console.log(`%cWARN:%c [${this.getDate()}]: ${msg}`, "color: orange", "color: inherit");
   }
   public error(msg: string) {
      console.log(`%cERROR:%c [${this.getDate()}]: ${msg}`, "color: red", "color: inherit");
   }
}