package com.siemens.dl.supply.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.siemens.dl.supply.web.rest.TestUtil;

public class RecordTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Record.class);
        Record record1 = new Record();
        record1.setId(1L);
        Record record2 = new Record();
        record2.setId(record1.getId());
        assertThat(record1).isEqualTo(record2);
        record2.setId(2L);
        assertThat(record1).isNotEqualTo(record2);
        record1.setId(null);
        assertThat(record1).isNotEqualTo(record2);
    }
}
