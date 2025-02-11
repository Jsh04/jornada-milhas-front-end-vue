import FileUtil from "./FileUtil";


describe('FileUtilTests', () => {
    it('DeveraRetornarByteArrayPassandoBase64', () => {
        
        // Arrange
        const base64String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII";
        
        // Act
        const result = FileUtil.returnByteArrayFile(base64String);

        // Assert
        expect(result).not.toBeNull();
    });
});