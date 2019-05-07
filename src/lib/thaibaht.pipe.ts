import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thaibaht'
})
export class ThaiBahtPipe implements PipeTransform {
  private thaiNum = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
  private thaiUnit = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];

  transform(value: any, args?: any): any {
    if (isNaN(value) || value === null) { return value; }

    const splitArray = parseFloat(value).toFixed(2).toString().split('.');
    const bahtArray = splitArray[0].replace('-', '')
      .split('')
      .reverse()
      .map((val: string) => parseInt(val, 10));

    const resultBahtArray = [];

    resultBahtArray.push('บาท');
    const resultBaht = this.transformArray(bahtArray);
    resultBahtArray.push(resultBaht.reverse().join(''));

    if (splitArray[1] === undefined || splitArray[1] === '00') {
      return resultBahtArray.reverse().join('') + 'ถ้วน';
    }

    const satangArray = splitArray[1].replace('-', '')
      .split('')
      .reverse()
      .map((val: string) => parseInt(val, 10));

    const resultSatangArray = [];

    resultSatangArray.push('สตางค์');
    const resultSatang = this.transformArray(satangArray).join('');
    resultSatangArray.push(resultSatang);

    return resultBahtArray.reverse().join('') + resultSatangArray.reverse().join('');
  }

  private transformArray(array: any[]) {
    return this.chunkArray(array, 6).map((chunk, chunkIndex) => {
      const chunkResult = [];

      if (chunkIndex > 0) {
        chunkResult.push('ล้าน');
      }

      chunk.forEach((num: number, index: number) => {
        if (num === 0 && chunk[index + 1] !== undefined) {
          return;
        }

        if (num === 1 && index === 0 && chunk.length === 2 && chunk[1] === 0) {
          chunkResult.push('หนึ่ง');
          return;
        }

        if (num === 1 && index === 0 && chunk.length > 1) {
          chunkResult.push('เอ็ด');
          return;
        }

        if (num === 1 && index === 1) {
          chunkResult.push(this.thaiUnit[index]);
          return;
        }

        if (num === 2 && index === 1) {
          chunkResult.push('ยี่' + this.thaiUnit[index]);
          return;
        }

        if (num === 0 && index !== 0) {
          return;
        }

        chunkResult.push(this.thaiNum[num] + this.thaiUnit[index]);
      });

      return chunkResult.reverse().join('');
    });
  }

  private chunkArray(array: any[], size: number) {
    const results = [];

    while (array.length) {
      results.push(array.splice(0, size));
    }

    return results;
  }
}
