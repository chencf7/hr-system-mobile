import { Component,
  OnInit,
  TemplateRef,
  HostBinding,
  Input,
  Output,
  HostListener,
  EventEmitter,
} from '@angular/core';
import { CommonpopupService } from 'src/app/services/commonpopup.service';

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
  private _title: string='';

  // 输入类型
  @Input() type;
  @Input('code') _thatitemcode; 

  @Input() shuangxdata;
  // 暴露shuangxdataChange属性
  // 当shuangxdataChange值变化时，就把shuangxdataChange值发射给父组件。
  @Output('shuangxdataChange') crtitemdataChange=new EventEmitter();

  @Input()
  get thumb() {
    return this._thumb;
  }
  get thumb_component() {
    return this._thumb_component;
  }
  get thumb_src() {
    return this._thumb_src;
  }
  set thumb(value: string|TemplateRef<any>){
    if (value instanceof TemplateRef) {
      this._thumb_component = true;
      this._thumb = value;
    } else {
      this._thumb_component = false;
      this._thumb_src = <string>value;
    }
  }

  @Input()
  set title(value: string){
    this._title=value;
  }

  @Input()
  get extra() {
    return this._extra;
  }
  get extra_component() {
    return this._extra_component;
  }
  get extra_title() {
    return this._extra_title;
  }
  set extra(value: string|TemplateRef<any>){
    if(value instanceof TemplateRef){
      this._extra_component = true;
      this._extra = value;
    }else{
      this._extra_component = false;
      this._extra_title = <string>value;
    }
  }

  // 此处必须声明get arrow()，组件类HrselectItemComponent才有arrow属性
  @Input()
  get arrow(){
    return this._arrow;
  }
  set arrow(value) {
    this._arrow = value;
    this.setClsMap();
  }
  // 声明绑定组件点击事件，定义一个发射器对象（其实是一个observers数组），事件点击后使用emit触发
  @Output()
  onClick: EventEmitter<any> = new EventEmitter<any>();

  // 给组件名添加默认的class，将this.wrapCls（类名）绑定到当前声明的组件上，
  // 即<app-selecthr-item [ngClass]="this.wrapCls"></app-selecthr-item>
  // 其他方法绑定默认的class
  // 方式一：使用@Component的host属性
  // 方式二：在样式里使用:host选择器
  // 参考：https://majing.io/posts/10000009911171
  @HostBinding('class')
  get bingClassName(): string {
    return this.wrapCls;
  }

  // 给默认组件名称绑定click事件
  @HostListener('click', ['$event'])
  click(event){
    this.onItemClick(event);
  }


  constructor(private popupCtrl: CommonpopupService) { }

  ngOnInit() {
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
      [`${this.defaultProps.prefixCls}-line-wrap`]: this.defaultProps.wrap,
      ['hrselect-item']: true,
    };

    this.arrowCls = {
      [`${this.defaultProps.prefixCls}-arrow`]: true,
      [`${this.defaultProps.prefixCls}-arrow-horizontal`]: this._arrow === 'horizontal',
      [`${this.defaultProps.prefixCls}-arrow-vertical`]: this._arrow === 'down' || this._arrow === 'up',
      [`${this.defaultProps.prefixCls}-arrow-vertical-up`]: this._arrow === 'up'
    };
  }

  // 组件绑定的点击事件
  onItemClick(ev){
    // 触发父组件调用事件，父组件调用声明onClick属性，该属性是一个observal观察对象，emit即为触发订阅动作
    this.onClick.emit(ev);
    this.innerItemClick();
  }
  // 组件内部根据hrselectcode判断执行的点击事件
  async innerItemClick(){
    if(this._thatitemcode){
      const data = await this.popupCtrl.popup(this._thatitemcode);
      console.log(data);
      // if (data.role === 'ok') {
      // }
    }
  }

}
