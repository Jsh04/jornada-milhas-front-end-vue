import FileUtil from "@/util/FileUtil";


describe('FileUtil', () => {
    describe('returnByteArrayFile_ShouldBeBlobType_WhenPassedBase64String', () => {
        it('should read a file', () => {
            const base64Image = 'data:text/plain;base64,SGVsbG8gV29ybGQ=';
            const fileContent = FileUtil.returnByteArrayFile(base64Image);
            expect(fileContent).not.toBeNull();
            expect(fileContent).toBeInstanceOf(Blob);
        });
    });
});