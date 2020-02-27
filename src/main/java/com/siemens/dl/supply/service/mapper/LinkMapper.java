package com.siemens.dl.supply.service.mapper;


import com.siemens.dl.supply.domain.*;
import com.siemens.dl.supply.service.dto.LinkDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Link} and its DTO {@link LinkDTO}.
 */
@Mapper(componentModel = "spring", uses = {AssemblyLineMapper.class})
public interface LinkMapper extends EntityMapper<LinkDTO, Link> {

    @Mapping(source = "assemblyline.id", target = "assemblylineId")
    @Mapping(source = "assemblyline.name", target = "assemblylineName")
    LinkDTO toDto(Link link);

    @Mapping(target = "observations", ignore = true)
    @Mapping(target = "removeObservation", ignore = true)
    @Mapping(source = "assemblylineId", target = "assemblyline")
    Link toEntity(LinkDTO linkDTO);

    default Link fromId(Long id) {
        if (id == null) {
            return null;
        }
        Link link = new Link();
        link.setId(id);
        return link;
    }
}
