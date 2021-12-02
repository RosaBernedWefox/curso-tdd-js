import Alarm from "./Alarm";

function sensor(...pressureValue) {
  return {
    popNextPressurePsiValue(){
      return pressureValue.shift();
    } 
  }
}
  const log = jest.fn()

test("alarm activates when sensor value is below pressure threshold 17", () => {
  const log = jest.fn()
  const sensorCheck = jest.fn().mockReturnValue(16);
  const logger = {  
  log
  }

  const alarm = new Alarm({popNextPressurePsiValue: sensorCheck}, logger);
  alarm.check();

  expect(log).toHaveBeenCalledWith("Alarm activated!");
});

test("alarm doesn't activate when sensor value is inside threshold values", () => {
  const sensorCheck = jest.fn().mockReturnValue(18);
  const log = jest.fn()
  const logger = {  
    log 
  }

  const alarm = new Alarm({popNextPressurePsiValue: sensorCheck}, logger);
  alarm.check();

  expect(log).not.toHaveBeenCalled();
});

test("alarm activates when sensor value is over 21", () => {
  const sensorCheck = jest.fn().mockReturnValue(22);
  const log = jest.fn()
  const logger = {  
    log
  }

  const alarm = new Alarm({popNextPressurePsiValue: sensorCheck}, logger);
  alarm.check();

  expect(log).toHaveBeenCalledWith("Alarm activated!");
});

test("alarm deactivates", () => {
  const sensorCheck = jest.fn()
  .mockReturnValueOnce(15)
  .mockReturnValueOnce(18);
  const log = jest.fn()
  const logger = {  
   log
  }

  const alarm = new Alarm({popNextPressurePsiValue: sensorCheck}, logger);
  alarm.check();
  
  alarm.check();

  expect(log).toHaveBeenCalledWith("Alarm deactivated!");
});