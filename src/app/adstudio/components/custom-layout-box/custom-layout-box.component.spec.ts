import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CustomLayoutBoxComponent } from './custom-layout-box.component'

describe('CustomLayoutBoxComponent', () => {
  let component: CustomLayoutBoxComponent
  let fixture: ComponentFixture<CustomLayoutBoxComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomLayoutBoxComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CustomLayoutBoxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
