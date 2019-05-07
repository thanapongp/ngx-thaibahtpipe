import { ThaiBahtPipe } from './thaibaht.pipe';

describe('ThaiBahtPipe', () => {
  let pipe: ThaiBahtPipe;

  beforeEach(() => pipe = new ThaiBahtPipe());

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform non stang value correctly', () => {
    expect(pipe.transform('1')).toBe('หนึ่งบาทถ้วน');
    expect(pipe.transform('11')).toBe('สิบเอ็ดบาทถ้วน');
    expect(pipe.transform('21')).toBe('ยี่สิบเอ็ดบาทถ้วน');
    expect(pipe.transform('1021.00')).toBe('หนึ่งพันยี่สิบเอ็ดบาทถ้วน');
    expect(pipe.transform('701021')).toBe('เจ็ดแสนหนึ่งพันยี่สิบเอ็ดบาทถ้วน');
    expect(pipe.transform('101701021.00')).toBe('หนึ่งร้อยเอ็ดล้านเจ็ดแสนหนึ่งพันยี่สิบเอ็ดบาทถ้วน');
  });

  it('should transform stang value correctly', () => {
    expect(pipe.transform('1.50')).toBe('หนึ่งบาทห้าสิบสตางค์');
    expect(pipe.transform('11.21')).toBe('สิบเอ็ดบาทยี่สิบเอ็ดสตางค์');
    expect(pipe.transform('11.10')).toBe('สิบเอ็ดบาทสิบสตางค์');
  });

  it('should return the same value if the input is not a number', () => {
    expect(pipe.transform('hello')).toBe('hello');
  });
});
