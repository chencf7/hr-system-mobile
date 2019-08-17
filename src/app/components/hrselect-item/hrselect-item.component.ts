import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-hrselect-item',
  templateUrl: './hrselect-item.component.html',
  styleUrls: ['./hrselect-item.component.scss'],
})
export class HrselectItemComponent implements OnInit {
  // 初始默认属性
  defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
    platform: 'ios',
    rippleStyle: {}
  };

  arrowCls: any = {};
  lineCls: any = {};
  wrapCls: string = '';
  rippleCls: any = {};
  rippleClicked: boolean = false;
  debounceTimeout: any;

  private _thumb_component: boolean = false;
  private _thumb: TemplateRef<any>;
  private _thumb_src: string = '';
  private _extra_component: boolean = false;
  private _extra: TemplateRef<any>;
  private _extra_title: string = '';
  private _arrow: string = '';
  private _disabled: boolean = false;
  private _className: string = '';
  private _active: boolean = false;

  constructor() { }

  ngOnInit() {
    debugger;
    this.defaultProps.rippleStyle = { display: 'none' };
    this.setClsMap();
  }

  setClsMap() {
    const classNameList = this._className.split(' ');
    let classNameObj = {};
    this.wrapCls = '';

    for (const value of classNameList) {
      if (value) {
        classNameObj = {
          ...classNameObj,
          ...{ [`${value}`]: true }
        };
      }
    }

    const wrapClsObj = {
      [`${this.defaultProps.prefixCls}-item`]: true,
      [`${this.defaultProps.prefixCls}-item-disabled`]: this._disabled,
      [`${this.defaultProps.prefixCls}-item-active`]: this._active,
      [`${this.defaultProps.prefixCls}-item-error`]: this.defaultProps.error,
      [`${this.defaultProps.prefixCls}-item-top`]: this.defaultProps.align === 'top',
      [`${this.defaultProps.prefixCls}-item-middle`]: this.defaultProps.align === 'middle',
      [`${this.defaultProps.prefixCls}-item-bottom`]: this.defaultProps.align === 'bottom',
      ...classNameObj
    };

    for (const key in wrapClsObj) {
      if (wrapClsObj[key]) {
        this.wrapCls += ` ${key}`;
      }
    }

    this.rippleCls = {
      [`${this.defaultProps.prefixCls}-ripple`]: true,
      [`${this.defaultProps.prefixCls}-ripple-animate`]: this.rippleClicked
    };

    this.lineCls = {
      [`${this.defaultProps.prefixCls}-line`]: true,
      [`${this.defaultProps.prefixCls}-line-multiple`]: this.defaultProps.multipleLine,
      [`${this.defaultProps.prefixCls}-line-wrap`]: this.defaultProps.wrap
    };

    this.arrowCls = {
      [`${this.defaultProps.prefixCls}-arrow`]: true,
      [`${this.defaultProps.prefixCls}-arrow-horizontal`]: this._arrow === 'horizontal',
      [`${this.defaultProps.prefixCls}-arrow-vertical`]: this._arrow === 'down' || this._arrow === 'up',
      [`${this.defaultProps.prefixCls}-arrow-vertical-up`]: this._arrow === 'up'
    };
  }

}
