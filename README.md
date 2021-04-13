## [DEMO](https://diananeumann.github.io/JS-VM-Detection/index.html)
***
## VMs detection

Возможности WebGL позволяют узнать вендора и модель видеокарты, при этом использование виртуальных машин будет оставлять характерные записи "VMWare" / "Virtual Graphics Adapter".

Использование объекта [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) позволяет узнать много информации о системе.

В итоге эта связка позволяет детектировать виртуальные машины в браузере.

#### Родительская система:

![1](https://user-images.githubusercontent.com/56086653/111825831-0100dc80-88f9-11eb-9a9a-2f63489ee2c7.PNG)


### Виртуальная машина:

![2](https://user-images.githubusercontent.com/56086653/111825927-1c6be780-88f9-11eb-9f60-99e6ea3a6a5d.jpg)

### Apple iPad (A12Z):

![W_aFdKc3rqA](https://user-images.githubusercontent.com/56086653/114584712-98a0e300-9c8b-11eb-8578-1b33b76f7670.jpg)

как видим, Apple не делится с браузером параметрами системы.

### Android: 

![QYx_A4LPd_4](https://user-images.githubusercontent.com/56086653/114585289-2bda1880-9c8c-11eb-906e-d30411eea165.jpg)

чего не скажешь об андроиде, доступны все параметры, кроме заряда батареи.









