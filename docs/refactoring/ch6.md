---
title: Chapter 6. 기본적인 리팩토링
date: 2020-05-24 01:25
img: default.png
tags:
    - JavaScript
    - Refactoring
---

### 1. 함수 추출하기 (<-> 함수 인라인 하기)
- 코드를 보고 무슨 일을 하는지 파악하는 데 한참이 걸린다면 그 부분을 함수로 추출한 뒤 무슨일에 걸맞는 이름을 짓는다.
- 함수를 짧게 만들면 함수 호출이 맣아져서 성능이 느려질까 걱정하는 사람도 있지만 요즘엔 함수가 짧으면 캐싱하기가 더 쉬워 컴파일러가 최적화하는데 유리할 때가 많다.
- 이러한 짧은 함수의 이점은 이름을 잘 지어야만 발휘되므로 이름 짓기에 특별히 신경 써야 한다.

#### 절차
- 함수를 만들 때 '어떻게'가 아닌 '무엇을'하는지를 잘 드러내게 이름을 붙인다.
    - 대상 코드가 한줄이라 하더라도 함수를 뽑아 목적이 잘 드러낼 수 있다면 함수로 추출한다.
    - 적절한 이름이 잘 떠오르지 않는다면 함수로 추출하면 안된다는 신호다.
    
#### 값을 반환할 변수가 여러 개라면?
- 만약 지역 변수를 함수로 넘길 때 값을 반환할 변수가 여러개라면 어떻게 할까?
- 보통 추출할 코드를 다르게 재구성하여 각각을 반환하는 함수 여러 개로 만들 수 있다.
- 굳이 한 함수에서 여러 값을 반환해야 한다면 값들을 레코드로 묶어서 반환해도 될것이다. 하지만 임시 변수 추출 작업을 다른 방식으로 처리하는 것이 나을 때가 많다.
- 임시 변수를 질의 함수로 바꾸거나, 변수를 쪼개는식으로 처리하면 좋다.

### 2. 함수 인라인 하기 (<-> 함수 추출하기)
- 때로는 함수의 본문이 이름만큼 명확한 경우도 있다. 혹은 함수 본문 코드를 이름만큼 깔끔하게 리팩터링할 때도 있다.
- 이럴 때는 그 함수를 제거한다.

### 3. 변수 추출하기 (<-> 변수 인라인하기)
- 표현식이 너무 복잡해서 이해하기 어려울 때가 있다. 이럴 떄 지역 변수를 활용하면 표현식을 쪼개 관리하기 더 쉽게 만들 수 있다.
- 변수 추출을 고려한다고 함은 표현식에 이름을 붙이고 싶다는 뜻이다.
- 이름을 붙이기로 했다면 그 이름이 들어갈 문맥도 살펴야 한다. 현재 함수 안에서만 의미가 있다면 변수로 추출하는 것이 좋다.
- 그러나 함수 안이아닌 넓은 범위까지 의미가 있다면 이는 변수가 아닌 함수로 추출해야 할 것이다.

> 변수 추출하기에서 객체의 엄청난 장점을 볼 수 있다. 객체는 특정 로직과 데이터를 외부와 공유하려 할 때 공유할 정보를 설명해주는 적당한 크기의 문맥이 되어준다.

### 4. 변수 인라인하기 (<-> 변수 추출하기)
- 변수를 추출한게 원래 표현식과 다를 바 없을 때도 존재한다. 이럴땐 변수 인라인하기를 이용하자.

### 5. 함수 선언 바꾸기(이름 바꾸기)
- 함수의 이름이 좋으면 구현 코드를 살펴볼 필요 없이 호출문만 보고도 무슨 일을 하는지 파악할 수 있다.

#### 좋은 이름을 떠오르는 효과적인 방법
- 먼저 주석을 이용해 이 함수의 목적을 설명해본다.
- 그러다 보면 좋은 이름이 떠오르게된다.

### 6. 변수 캡슐화하기
- 리팩터링은 결국 프로그램의 요소를 조작하는 일이다. 함수는 데이터보다 다루기가 수월하다.
- 함수를 사용한다는건 대체로 호출한다는 뜻이고, 함수의 이름을 바꾸거나 다른 모듈로 옮기기는 어렵지 않다.
- 반대로 데이터는 참조하는 모든 부분을 한 번에 바꿔야 코드가 제대로 작동한다. 
- 그러므로 접근할 수 있는 범위가 넓은 데이터를 옮길 때는 먼저 그 데이터로의 접근을 독점하는 함수로 캡슐화하는 것이 가장 좋은 방법이다.

### 7. 변수 이름 바꾸기
- 폭넓게 쓰는 변수라면 변수 캡슐화하기를 고려한다.
- 변수는 프로그래머가 하려는 일에 관해 많은 것을 설명해준다.

### 8. 매개변수 객체 만들기
- 매개변수의 숫자가 많다면 객체로 만들어 전달하기를 고려해보자.
- 데이터 뭉치를 데이터 구조로 묶으면 데이터 사이의 관계가 명확해진다는 이점을 얻는다.
- 이는 코드를 더 근본적으로 바꿔준다. 객체로 만들면 해당 데이터에 공통으로 적용되는 동작들을 메서드로 만들 수 있다.

### 9. 여러 함수를 클래스로 묶기
- 공통 데이터를 중심으로 긴밀하게 엮어 작동하는 함수 무리를 발견하면 클래스 하나로 묶자.
- 클래스로 묶으면 이 함수들이 공유하는 공통 환경을 더 명확하게 표현할 수 있고, 각 함수에 전달되는 인수를 줄여서 객체 안에서의 함수 호출을 간결하게 만들 수 있다.

### 10. 여러 함수를 변환 함수로 묶기
- 변환 함수는 원본 데이터를 입력받아 필요한 정보를 모두 도출한 뒤, 각각의 출력 데이터의 필드에 넣어 반환한다.
- 이렇게 해두면 도출 과정에 검토할 일이 생겼을 때 변환 함수만 살펴보면 된다.
- 이 방식은 **여러 함수를 클래스로 묶기** 방식과 비슷하지만 큰 차이점이 있다.
- 변환 함수로 묶은 데이터는 새로운 레코드에 저장되기 때문에 원본 데이터가 수정되면 일관성이 깨질 수 있다.
- 그러므로 원본 데이터가 코드 안에서 갱싱될 경우는 클래스로 묶고 그러지 않을 경우엔 상황에 따라 진행하자.

> 여러 함수로 묶으면 여기 저기 퍼져있는 도출 로직이 중복되는 것을 피할 수 있다.
> 저자는 본질은 같고 부가 정보만 붙일 경우 함수 이름은 "enrich"로 하고, 형태가 변할 때만 "transform" 이라고 한다.

### 11. 단계 쪼개기
- 단계를 쪼개는 기법은 주로 덩치 큰 소프트웨어에 적용된다.
- 다른 단계로 볼 수 있는 코드의 영역들이 마침 서로 다른 데이터와 함수를 사용한다면 단계 쪼개기에 적합하다.
- 이 코드 영역들을 별도의 모듈로 분리하면 그 차이를 분명하게 드러낼 수 있다.

```js
function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  return basePrice - discount + shippingCost;
}
```
- 간단한 예이지만 계산이 두 단계로 이루어짐을 알 수 있다.
- 상품 정보를 이용해 결제 금액 중 상품 가격을 계산하고, 배성 정보를 이용해 배송비를 계산한다.
- 이 둘은 두 단계로 나누는것이 좋다.
 
```js
function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity)
  return applyShipping(priceData, shippingMethod);
}
function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    return {basePrice: basePrice, quantity: quantity, discount: discount}
}

function applyShipping(priceDate, shippingMethod) {
  const shippingPerCase = (priceDate.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = priceDate.quantity * shippingPerCase;
  return priceDate.basePrice - priceDate.discount + shippingCost;
}
```

#### 명령줄 프로그램 쪼개기(자바)
```java
public class Chapter6 {
  public static void main(String[] args) {
    try {
      if (args.length == 0) throw new IllegalArgumentException("파일명을 입력하세요");
      String fileName = args[args.length - 1];
      File input = Paths.get(fileName).toFile();
      ObjectMapper mapper = new ObjectMapper();
      Order[] orders = mapper.readValue(input, Order[].class);
      if (Stream.of(args).anyMatch(arg -> "r".equals(arg)))
        System.out.println(Stream.of(orders)
            .filter(o -> "ready".equals(o.status)).count());
      else
        System.out.println(orders.length);
    } catch (Exception e) {
      System.err.println(e);
      System.exit(1);
    }

  }

  static class Order {
    String status;
  }
}
```
- 이 코드는 먼저 주문 목록을 읽어서 개수를 세고, 다음 명령줄 인수를 담은 배열을 읽어 프로그램의 동작을 결정한다.
- 그러므로 단계 쪼개기의 리팩터링 대상으로 적합하다.
- 첫 번째 단계는 명령줄 인수의 구문을 적절히 가공하고 두 번째 단계에서 해당 가공된 데이터를 이용하여 결과를 반환해낸다.

```java
public class Chapter6 {
  public static void main(String[] args) {
    try {
      System.out.println(run(args));
    } catch (Exception e) {
      System.err.println(e);
      System.exit(1);
    }
  }

  private static long run(String[] args) throws IOException {
    return countOrders(parseCommandLine(args));
  }

  private static CommandLine parseCommandLine(String[] args) {
    if (args.length == 0) throw new IllegalArgumentException("파일명을 입력하세요");
    CommandLine commandLine = new CommandLine();
    commandLine.onlyCountReady = Arrays.asList(args).contains("r");
    commandLine.fileName = args[args.length - 1];
    return commandLine;
  }

  private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(commandLine.fileName).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady)
      return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else
      return orders.length;
  }

  static class Order {
    String status;
  }

  static class CommandLine{
    boolean onlyCountReady;
    String fileName;
  }
}
```
- 단계별로 나눠 첫 번쨰 단계에서는 데이터 구조를 만들어 전다해주었다.
- 이런 방법말고 클래스를 이용하는 방법도 존재한다.

```java
public class Chapter6 {
  public static void main(String[] args) {
    try {
      System.out.println(run(args));
    } catch (Exception e) {
      System.err.println(e);
      System.exit(1);
    }
  }

  public static long run(String[] args) throws IOException {
    return countOrders(new CommandLine(args));
  }

  private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(commandLine.fileName()).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady())
      return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else
      return orders.length;
  }

  static class Order {
    String status;
  }

  static class CommandLine {
    private String[] args;

    public CommandLine(String[] args) {
      if (args.length == 0) throw new IllegalArgumentException("파일명을 입력하세요");
      this.args = args;
    }

    public String fileName() {
      return args[args.length - 1];
    }

    public boolean onlyCountReady() {
      return Arrays.asList(args).contains("r");
    }
  }
}
```
- 객체를 이용하여 리팩터링도 가능하다.
- 상황에 따라 이 두방법을 적절히 사용하면 좋을 것이다.
- 보통 이렇게 단순한 데이터 구조의 경우엔 중간 데이터 구조를 만드는것도 좋은 방법일 것이다.