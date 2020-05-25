(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{378:function(a,s,t){"use strict";t.r(s);var n=t(35),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("ul",[t("li",[a._v("자바가 람다를 지원하면서 API를 작성하는 모범 사례도 크게 바뀌었다.")]),a._v(" "),t("li",[a._v("상위 클래스의 기본 메서드를 재정의해 원하는 동작을 구현하는 템플릿 메서드 패턴의 매력이 크게 줄었다.")]),a._v(" "),t("li",[a._v("이를 대체하는 현대적인 해법은 같은 효과의 함수 객체를 받는 정적 팩터리나 생성자를 제공하는 것이다.")]),a._v(" "),t("li",[a._v("즉 함수형 매개변수를 많이 받아야 하므로 함수형 매개변수 타입을 올바르게 선택해야 한다.")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeEldestEntry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Entry")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" eldest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[a._v("LinkedHashMap에서는 위의 메서드 조건이 맞으면 새로운 키가 추가될 때 가장 오래된 키를 제거하는 메서드를 제공한다.")]),a._v(" "),t("li",[a._v("현재 이를 다시 구현한다면 함수객체를 정적 팩터리나 생성자로 받아 이를 구현하였을 것이다.")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@FunctionalInterface")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EldestEntryRemovalFunction")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("remove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Entry")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" eldest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ul",[t("li",[a._v("이러한 함수형 인터페이스를 매개변수로 받으면 될 것이다.")]),a._v(" "),t("li",[a._v("이렇게 직접 구현하여도 되지만 자바 표준에는 약 40여개의 함수형 인터페이스를 제공하므로 "),t("strong",[a._v("필요한 용도에 맞는게 있다면 직접 구현하지말고 표준 함수형 인터페이스를 활용하자.")])]),a._v(" "),t("li",[a._v("제공해주는 인터페이스를 사용하면 API를 다루는 개념의 수도 줄어들고 default 메서드로 제공해주는 기능들을 사용할 수 있기 때문에 상호 운용성이 더 좋아질 것이다.")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BiPredicate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Main")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BiPredicate")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Entry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" biPredicate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("ul",[t("li",[a._v("BiPredicate를 이용하면 위의 인터페이스와 동일한 기능을 구현할 수 있다.")]),a._v(" "),t("li",[a._v("40여개의 함수형 인터페이스를 모두 기억하진 말고 기본 인터페이스 6개만 기억후 나머지는 이를 통해 유추할 수 있다.")])]),a._v(" "),t("h4",{attrs:{id:"operator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operator"}},[a._v("#")]),a._v(" Operator")]),a._v(" "),t("ul",[t("li",[a._v("Operator 인터페이스는 인수가 1개인 UnaryOperator, 인수가 2개인 BinaryOperator로 나뉘며 "),t("strong",[a._v("반환값과 인수가 같은 함수를 뜻한다.")])])]),a._v(" "),t("h4",{attrs:{id:"predicate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predicate"}},[a._v("#")]),a._v(" Predicate")]),a._v(" "),t("ul",[t("li",[a._v("인수를 받아 boolean을 반환하는 함수이다.")])]),a._v(" "),t("h4",{attrs:{id:"function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[a._v("#")]),a._v(" Function")]),a._v(" "),t("ul",[t("li",[a._v("인스와 반환 타입이 다른 함수이다.")])]),a._v(" "),t("h4",{attrs:{id:"supplier"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supplier"}},[a._v("#")]),a._v(" Supplier")]),a._v(" "),t("ul",[t("li",[a._v("인수를 받지 않고 오직 반환만을 제공하는 함수이다.")])]),a._v(" "),t("h4",{attrs:{id:"consumer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consumer"}},[a._v("#")]),a._v(" Consumer")]),a._v(" "),t("ul",[t("li",[a._v("인수를 하나 받고 반환값이 없는 함수를 뜻한다.")])]),a._v(" "),t("h4",{attrs:{id:"기본타입-함수형-인터페이스"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기본타입-함수형-인터페이스"}},[a._v("#")]),a._v(" 기본타입 함수형 인터페이스")]),a._v(" "),t("ul",[t("li",[a._v("int, double, long에 대한 기본타입 인터페이스를 제공한다.")]),a._v(" "),t("li",[a._v("IntPredicate, LongBinaryOperator 등이 있다.")]),a._v(" "),t("li",[a._v("Function 인터페이스는 LongToIntFunction, ToLongFunction<T>, ToIntBiFunction<T, U> 등을 제공한다.")]),a._v(" "),t("li",[a._v("Supplier를 제외한 기본 함수형 인터페이스는 BiFunction, BiPredicate, BiConsumer를 제공한다.")]),a._v(" "),t("li",[a._v("Consumer는 ObjDoubleConsumer<T>, ObjIntConsumer<T>등도 제공한다.")]),a._v(" "),t("li",[t("strong",[a._v("기본 함수형 인터페이스에 박싱된 기본 타입을 사용하지 말자. 성능의 문제가 발생하기 쉽다.")])])]),a._v(" "),t("h4",{attrs:{id:"직접-정의가-필요할-때"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#직접-정의가-필요할-때"}},[a._v("#")]),a._v(" 직접 정의가 필요할 때")]),a._v(" "),t("ul",[t("li",[a._v("대부분의 상황에서는 직접 작성하는 것보다 표준 함수형 인터페이스를 사용하는 편이 낫다.")]),a._v(" "),t("li",[a._v("하지만 기본 함수형인터페이스에서 제공해주지 않을 경우는 직접 구현이 필요하다.")]),a._v(" "),t("li",[a._v("그리고 Comparator<T>는 사실 ToIntBiFunction<T, U>와 동일하다.")]),a._v(" "),t("li",[a._v("하지만 Comparator는 독자적인 인터페이스로 살아남아야 한다.")]),a._v(" "),t("li",[a._v("먼저 API에서 굉장히 자주사용되는데 해당 클래스 이름은 용도를 잘 설명해주고 있다.")]),a._v(" "),t("li",[a._v("두 번째, 구현하는 쪽에서 반드시 지켜야할 규약을 담고 있다.")]),a._v(" "),t("li",[a._v("세 번째, 비교자들을 변환하고 조합해주는 유용한 디폴트 메서드들을 듬뿍 담고 있다.")])]),a._v(" "),t("h4",{attrs:{id:"표준-함수형-인터페이스가-존재하더라도-직접-구현이-필요한-경우"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#표준-함수형-인터페이스가-존재하더라도-직접-구현이-필요한-경우"}},[a._v("#")]),a._v(" 표준 함수형 인터페이스가 존재하더라도 직접 구현이 필요한 경우")]),a._v(" "),t("ul",[t("li",[a._v("자주 쓰이며, 이름 자체가 용도를 명확히 설명해준다.")]),a._v(" "),t("li",[a._v("반드시 따라야 하는 규약이 존재한다.")]),a._v(" "),t("li",[a._v("유용한 디폴트 메서드를 제공할 수 있다.")])]),a._v(" "),t("h4",{attrs:{id:"functionalinterface-애너테이션을-사용하라"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functionalinterface-애너테이션을-사용하라"}},[a._v("#")]),a._v(" @FunctionalInterface 애너테이션을 사용하라")]),a._v(" "),t("ul",[t("li",[a._v("해당 애노테이션은 람다용을 설계된 것임을 명시적으로 알려준다.")]),a._v(" "),t("li",[a._v("추상 메서드를 오직하나만 존재하여야 컴파일이 되므로 누군가 실수로 추상 메서드를 추가하는걸 막아준다.")])]),a._v(" "),t("h4",{attrs:{id:"주의-사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#주의-사항"}},[a._v("#")]),a._v(" 주의 사항")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("서로 다른 함수형 인터페이스를 같은 위치의 인수로 받는 메서드들을 다중 정의해서는 안된다.")])]),a._v(" "),t("li",[a._v("ExecutorService의 submit 메서드는 Callable<ㅅT>를 받는 것과 Runnable을 받는 것을 다중 정의했다.")]),a._v(" "),t("li",[a._v("그래서 올바른 메서드를 알려주기 위하여 형변호나을 해야할 때가 종종 생긴다.")]),a._v(" "),t("li",[a._v("이를 피하기 위해서는 서로 다른 함수형 인터페이스를 같은 위치의 인수로 사용하는 다중정의를 피하자.")])]),a._v(" "),t("h4",{attrs:{id:"핵심-정리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#핵심-정리"}},[a._v("#")]),a._v(" 핵심 정리")]),a._v(" "),t("ul",[t("li",[a._v("함수형 인터페이스를 사용할 때 보통은 java.util.function 패키지의 표준 함수형 인터페이스를 활용하자.")]),a._v(" "),t("li",[a._v("상황에 따라 직접 구현이 필요할 때 직접 만들어 사용하자.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);