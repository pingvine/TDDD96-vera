import { DatePipePipe } from './date-pipe.pipe';

describe('DatePipePipe', () => {
  const dayMs = 1000 * 3600 * 24;
  const dayPipe = new DatePipePipe();

  it('create an instance', () => {
    const pipe = new DatePipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should say yesterday', () => {
    const yesterday = new Date(Date.now() - dayMs);
    expect(dayPipe.transform(yesterday) === 'Igår');
  });

  it('should say tomorrow', () => {
    const tomorrow = new Date(Date.now() + dayMs);
    expect(dayPipe.transform(tomorrow) === 'Imorgon');
  });

  it('should say today', () => {
    const today = new Date(Date.now());
    expect(dayPipe.transform(today) === 'Idag');
  });
});
