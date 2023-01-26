#include <stdio.h>

int main()
{
    // printf("Welcome My Project\n");
    // printf("Input User Name:\n");
    // printf("Input Password:\n\n");

    int usreName[10];
    int userPass[20];

    // Ask the user to type a Name, 
    printf("Type Your Name:--- \n %c");
// User Password must be at least,
    printf("Type Your Password:---- \n %d");

    // Get and save the number the user types
    scanf("%c \n", &usreName);
    scanf("%d \n", &userPass);

    // Output the number the user typed
    printf("Your Name is: %c \n ", usreName);
    printf("Your Password is: %d", userPass);



    // Name Input 

    char fullName[30];

        printf("Type your full name: \n");
        fgets(fullName, sizeof(fullName), stdin);

        printf("Hello %s", fullName);

    return 0;
}
