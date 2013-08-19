// No longer need as ng-repeat improved in angular 1.2
//formsAngular
//// Directive to handle subdocs.  Mostly a copy of ng-repeat, but needed to simplify it a bit to make it work
//    .directive('ngSubdocRepeat', [function () {
//        return {
//            transclude: 'element',
//            priority: 1000,
//            terminal: true,
//            compile: function (element, attr, linker) {
//                return function (scope, iterStartElement, attr) {
//                    var expression = attr.ngSubdocRepeat;
//                    var match = expression.match(/^\s*(.+)\s+in\s+(.*)\s*$/),
//                        lhs, rhs, valueIdent, keyIdent;
//                    if (!match) {
//                        throw Error("Expected ngSubdocRepeat in form of '_item_ in _collection_' but got '" +
//                            expression + "'.");
//                    }
//                    lhs = match[1];
//                    rhs = match[2];
//                    match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
//                    if (!match) {
//                        throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" +
//                            lhs + "'.");
//                    }
//                    valueIdent = match[3] || match[1];
//                    keyIdent = match[2];
//
//                    // Store a list of elements from previous run - an array of objects with following properties:
//                    //   - scope: bound scope
//                    //   - element: previous element.
//                    var lastOrderArr = [];
//
//                    scope.$watch(function ngSubdocRepeatWatch(scope) {
//                        var index, length,
//                            collection = scope.$eval(rhs),
//                            cursor = iterStartElement,     // current position of the node
//                        // Same as lastOrder but it has the current state. It will become the
//                        // lastOrder on the next iteration.
//                            nextOrderArr = [],
//                            arrayLength,
//                            childScope,
//                            key, value, // key/value of iteration
//                            array,
//                            last;       // last object information {scope, element, index}
//                        if (!angular.isArray(collection)) {
//                            // if object, extract keys, sort them and use to determine order of iteration over obj props
//                            array = [];
//                            for (key in collection) {
//                                if (collection.hasOwnProperty(key) && key.charAt(0) != '$') {
//                                    array.push(key);
//                                }
//                            }
//                            array.sort();
//                        } else {
//                            array = collection || [];
//                        }
//
//                        arrayLength = array.length;
//
//                        // we are not using forEach for perf reasons (trying to avoid #call)
//                        for (index = 0, length = array.length; index < length; index++) {
//                            key = (collection === array) ? index : array[index];
//                            value = collection[key];
//
//                            last = lastOrderArr.shift();
//
//                            if (last) {
//                                // if we have already seen this object, then we need to reuse the
//                                // associated scope/element
//                                childScope = last.scope;
//                                nextOrderArr.push(last);
//                                cursor = last.element;
//                            } else {
//                                // new item which we don't know about
//                                childScope = scope.$new();
//                            }
//
//                            childScope[valueIdent] = value;
//                            if (keyIdent) childScope[keyIdent] = key;
//                            childScope.$index = index;
//                            childScope.$first = (index === 0);
//                            childScope.$last = (index === (arrayLength - 1));
//                            childScope.$middle = !(childScope.$first || childScope.$last);
//
//                            if (!last) {
//                                linker(childScope, function (clone) {
//                                    cursor.after(clone);
//                                    last = {
//                                        scope: childScope,
//                                        element: (cursor = clone),
//                                        index: index
//                                    };
//                                    nextOrderArr.push(last);
//                                });
//                            }
//                        }
//
//                        //shrink children
//                        for (var j = 0; j < lastOrderArr.length ; j++) {
//                            lastOrderArr[j].element.remove();
//                            lastOrderArr[j].scope.$destroy();
//                        }
//
//                        lastOrderArr = nextOrderArr;
//                    });
//                };
//            }
//        }
//    }]);
//
