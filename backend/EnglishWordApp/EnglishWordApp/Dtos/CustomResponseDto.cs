namespace EnglishWordApp.Dtos
{
    public class CustomResponseDto<T>
    {
        public T Data { get; set; }
        public int StatusCode { get; set; }
        public List<string> Errors { get; set; }
    }
}
