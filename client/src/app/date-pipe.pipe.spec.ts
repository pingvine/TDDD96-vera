import {DatePipePipe} from './date-pipe.pipe';

describe('DatePipePipe', () => {
  const dayMs = 1000 * 3600 * 24;
  const dayPipe = new DatePipePipe();

  it('create an instance', () => {
    const pipe = new DatePipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should say yesterday', () => {
    const yesterday = new Date(Date.now() - dayMs);
    const transform = dayPipe.transform(yesterday);
    const check = transform.includes('Igår');
    expect(check).toBeTrue();
  });

  it('should say tomorrow', () => {
    const tomorrow = new Date(Date.now() + dayMs);
    const transform = dayPipe.transform(tomorrow);
    const check = transform.includes('Imorgon');
    expect(check).toBeTrue();
  });

  it('should say today', () => {
    const today = new Date(Date.now());
    expect(dayPipe.transform(today).includes('Idag')).toBeTrue();
  });
});
