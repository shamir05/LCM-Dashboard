import { TestBed } from '@angular/core/testing';
import { FileChipComponent } from './file-chip.component';

describe('FileChipComponent', () => {
  it('labels the download button with the file name and emits on click', () => {
    const fixture = TestBed.createComponent(FileChipComponent);
    fixture.componentRef.setInput('fileName', 'Evidence_Report.pdf');
    fixture.detectChanges();

    let downloads = 0;
    fixture.componentInstance.download.subscribe(() => downloads++);

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();

    expect(button.getAttribute('aria-label')).toBe('Download Evidence_Report.pdf');
    expect(downloads).toBe(1);
  });
});
