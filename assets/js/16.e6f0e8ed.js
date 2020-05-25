(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{355:function(t,v,l){"use strict";l.r(v);var _=l(35),i=Object(_.a)({},(function(){var t=this,v=t.$createElement,l=t._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("ul",[l("li",[t._v("어설프게 설계된 컴포넌트와 잘 설계된 컴포넌트의 가장 큰 차이는 바로 클래스 내부 데이터와 내부 구현 정보를 외부 컴포넌트로부터 얼마나 잘 숨겼느냐다.")]),t._v(" "),l("li",[t._v("잘 설계된 컴포넌트는 모든 내부 구현을 완벽히 숨겨, 구현과 API를 깔끔히 분리한다.")])]),t._v(" "),l("h4",{attrs:{id:"캡슐화의-장점"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#캡슐화의-장점"}},[t._v("#")]),t._v(" 캡슐화의 장점")]),t._v(" "),l("ul",[l("li",[t._v("시스템 개발 속도를 높인다. (여러 컴포넌트를 병렬로 개발할 수 있기 때문)")]),t._v(" "),l("li",[t._v("시스템 관리 비용을 낮춘다. (각 컴포넌트를 빠르게 파악, 디버깅, 교체가 가능)")]),t._v(" "),l("li",[t._v("캡슐화 자체가 성능을 높여주진 않지만 성능 최적화에 도움을 준다. (다른 컴포넌트에 영향을 주지않고 해당 컴포넌트에만 최적화가 용이)")]),t._v(" "),l("li",[t._v("소프트웨어 재사용성을 높인다. (외부에 의존성이 적을 수록 재사용성이 높아지기 때문)")]),t._v(" "),l("li",[t._v("큰 시스템을 제작하는 난이도를 낮춰준다.(캡슐화가 잘 되면 개별 컴포넌트별로 검증이 용이하다)")])]),t._v(" "),l("h4",{attrs:{id:"기본-원칙"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#기본-원칙"}},[t._v("#")]),t._v(" 기본 원칙")]),t._v(" "),l("ul",[l("li",[t._v("모든 클래스와 멤버의 접근성을 가능한 한 좁혀야 한다.")]),t._v(" "),l("li",[t._v("public으로 선언한다면 API가 되므로 영원히 하위 호환을 관리해주어야 한다.")]),t._v(" "),l("li",[t._v("public일 필요가 없는 클래스의 접근 수준을 package-private로 좁힌다면 이는 내부 구현이 되므로 가능하면 좁히는게 좋다.")]),t._v(" "),l("li",[t._v("public 클래스에서 멤버 접근수준을 package-private -> protected로 바꾸는 순간 해당 멤버는 공개 API이므로 영원히 지원이 필요해진다.")]),t._v(" "),l("li",[t._v("그러므로 protected 멤버의 수도 적을 수록 좋다.")])]),t._v(" "),l("h4",{attrs:{id:"멤버-접근성을-못하는-방해-제약"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#멤버-접근성을-못하는-방해-제약"}},[t._v("#")]),t._v(" 멤버 접근성을 못하는 방해 제약")]),t._v(" "),l("ul",[l("li",[t._v("상위 클래스의 메서드를 재정의할 떄는 그 접근 수준을 상위 클래스에서보다 좁게 설정할 수 없다.")]),t._v(" "),l("li",[t._v("이는  상위 클래스의 인스턴스는 하위 클래스의 인스턴스로 대체해 사용이 가능해야 하는 리스코프 치환 원칙을 지키기 위해 필요하다.")])]),t._v(" "),l("h4",{attrs:{id:"public-클래스의-인스턴스-필드는-되도록-public이-아니어야-한다"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#public-클래스의-인스턴스-필드는-되도록-public이-아니어야-한다"}},[t._v("#")]),t._v(" public 클래스의 인스턴스 필드는 되도록 public이 아니어야 한다.")]),t._v(" "),l("ul",[l("li",[t._v("public 필드는 값을 제한할 힘이 없으므로 그 필드와 관련된 모든 것은 불변을 보장할 수 없게 된다.")]),t._v(" "),l("li",[t._v("그리고 락에 대한 기능을 동작시키지 못하므로 스레드 세이프하지 않다.")]),t._v(" "),l("li",[t._v("예외적으로 상수일 경우엔 public static final 필드로 공개해도 된다.")])]),t._v(" "),l("h4",{attrs:{id:"자바-9-모듈-시스템"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#자바-9-모듈-시스템"}},[t._v("#")]),t._v(" 자바 9 모듈 시스템")]),t._v(" "),l("ul",[l("li",[t._v("패키지가 클래스의 묶음이듯, 모듈은 패키지들의 묶음이다.")]),t._v(" "),l("li",[t._v("모듈은 자신이 속하는 패키지 중 공개할 것들을 관례되어 있는 package에 선언한다.")]),t._v(" "),l("li",[t._v("protected, public 멤버라도 관례된 패키지에 공개하지 않으면 모듈 외부에서 접근이 불가능하다.")]),t._v(" "),l("li",[t._v("그러므로 기본 4개의 접근자와 달리 모듈에 적용되는 새로운 두 접근 수준에 상당한 주의가 필요하다.")])]),t._v(" "),l("h4",{attrs:{id:"핵심-정리"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#핵심-정리"}},[t._v("#")]),t._v(" 핵심 정리")]),t._v(" "),l("ul",[l("li",[t._v("프로그램 요소의 접근성은 가능한 한 최소환으로 하라.")]),t._v(" "),l("li",[t._v("꼭 필요한 것만 골라 최소한의 public API를 설계하고 그 외에는 의도치 않게 API로 공개되면 안된다.")]),t._v(" "),l("li",[t._v("public 클래스에서 public 필드는 오직 public static final 상수용 필드만 존재해야 한다.")])])])}),[],!1,null,null,null);v.default=i.exports}}]);