package com.vw.raclpservice.util;

import com.vw.raclpservice.entity.TemplateProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MapUtil {
    public Map<TemplateProperty, List<Object>> getMapSortedByColumnNumber
            (Map<TemplateProperty, List<Object>> unsortedMap){
        Map<TemplateProperty,List<Object>> sortedMap= new HashMap<>();
        Integer sizeOfMap=unsortedMap.keySet().size();
        for(int i=1;i<=sizeOfMap;i++){
            for(TemplateProperty templateProperty:unsortedMap.keySet()){
                if(templateProperty.getColumnNumber().equalsIgnoreCase("Column"+i)){
                    sortedMap.put(templateProperty,unsortedMap.get(templateProperty));
                }
            }
        }

        return sortedMap;
    }
}
