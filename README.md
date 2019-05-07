# ngx-ThaiBahtPipe

> An Angular pipe that transforms number into Thai words. Nothing more, nothing less.

# Install
### npm
```
npm install --save ngx-thaibahtpipe
```

### Import it to your app's module
```typescript
import { NgModule } from '@angular/core';
import { ThaiBahtPipeModule } from 'ngx-thaibahtpipe';

@NgModule({
    imports: [ThaiBahtPipeModule]
})
export class AppModule {}
```

# Usage
```html
{{ 1021.00 | thaibaht }} <!-- หนึ่งพันยี่สิบเอ็ดบาทถ้วน -->
{{ 701021 | thaibaht }} <!-- เจ็ดแสนหนึ่งพันยี่สิบเอ็ดบาทถ้วน -->
{{ 101701021.00 | thaibaht }} <!-- หนึ่งร้อยเอ็ดล้านเจ็ดแสนหนึ่งพันยี่สิบเอ็ดบาทถ้วน -->

{{ 11.10 | thaibaht }} <!-- สิบเอ็ดบาทสิบสตางค์ -->
```
