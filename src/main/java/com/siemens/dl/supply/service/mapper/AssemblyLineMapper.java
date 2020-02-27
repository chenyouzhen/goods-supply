package com.siemens.dl.supply.service.mapper;


import com.siemens.dl.supply.domain.*;
import com.siemens.dl.supply.service.dto.AssemblyLineDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link AssemblyLine} and its DTO {@link AssemblyLineDTO}.
 */
@Mapper(componentModel = "spring", uses = {ProductMapper.class})
public interface AssemblyLineMapper extends EntityMapper<AssemblyLineDTO, AssemblyLine> {

    @Mapping(source = "product.id", target = "productId")
    @Mapping(source = "product.name", target = "productName")
    AssemblyLineDTO toDto(AssemblyLine assemblyLine);

    @Mapping(target = "observations", ignore = true)
    @Mapping(target = "removeObservation", ignore = true)
    @Mapping(target = "links", ignore = true)
    @Mapping(target = "removeLink", ignore = true)
    @Mapping(target = "records", ignore = true)
    @Mapping(target = "removeRecord", ignore = true)
    @Mapping(source = "productId", target = "product")
    AssemblyLine toEntity(AssemblyLineDTO assemblyLineDTO);

    default AssemblyLine fromId(Long id) {
        if (id == null) {
            return null;
        }
        AssemblyLine assemblyLine = new AssemblyLine();
        assemblyLine.setId(id);
        return assemblyLine;
    }
}
