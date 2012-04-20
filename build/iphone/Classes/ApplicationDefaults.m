/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"sMymQKJEg3oC4LJgevi71nmoCnp5bGXf"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"TZKgeHIV3EciQLRvlLeg1XPvtYruZOk9"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"DyvNnqKkegBkfSFGFXyxeFykKqhMYWwW"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"j711z9ygx2OOT3oPYjINACVSGhSfIFIk"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"2qMBteBdQD3z4lpO7nvEN417iUsBREPx"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"DUvMerpbx2eqT04fPVD8P3Et2ZTzc2LU"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
